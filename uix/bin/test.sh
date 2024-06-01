#!/bin/bash

source $(dirname "$0")/../../bin/helpers.sh

if [ "$1" == "" ]; then
  message "No arguments provided!"
  bash $0 --help
fi

run_test_command(){
  if [ "$DEV_DOCKERLESS" == "0" ] && ! docker_compose ps ui | grep -q "Up"; then
    message "ui services are not running, starting services..."
    cli ui dev
    if [ $? -ne 0 ]; then
      color_output 31 "Failed to start containers"
      exit 1
    fi
    
    if [ "$1" == "--ci" ]; then
      shift
      docker_compose exec -T ui $@
    else
      cli ui exec $@
    fi
    message "Downing api containers..."
    docker_compose down ui
  else
    cli ui exec $@
  fi
}

# TODO this doesnt feel right, but it works for now
for arg in "$@"; do
  case $arg in
    --unit|-u)
      shift
      run_test_command $(execute ui/bin/test/unit "$@")
      ;;
    --e2e|-e)
      shift
      run_test_command $(execute ui/bin/test/e2e "$@")
      ;;
    --help|-h)
      color_output 33 "Options:"
      color_output 0 "    \e[32m-u, --unit\e[0m            Only run unit tests"
      color_output 0 "    \e[32m-e, --e2e\e[0m             Only run e2e tests (run in vscode 'js debug terminal' for watch-debugging current file)"
      exit 0
      ;;
  esac
done

