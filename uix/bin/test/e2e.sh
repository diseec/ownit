#!/bin/bash

source $(dirname "$0")/../../../../bin/helpers.sh

# Standardize the options and translate them to npm test options
for arg in "$@"; do
  case $arg in
    --only-smoke|-s)
      shift
      set -- "${@:1:$(($#-1))}" "--grep @smoke"
      ;;
    --parallel|-p)
      shift
      set -- "${@:1:$(($#-1))}" "--reporter=dot"
      ;;
    --help|-h)
      color_output 33 "Options:"
      color_output 0 "    \e[32m-s, --only-smoke\e[0m       Only run smoke tests"
      color_output 0 "    \e[32m-p, --parallel\e[0m         Run tests in parallel"
      message note "This is an extension for playwright test runner, for more options visit: https://playwright.dev/docs/test-parallel"
      exit 0
      ;;
  esac
done

# Run the test
if [ "$DEV_DOCKERLESS" == "0" ] && ! docker_compose ps web | grep -q "Up"; then
  message "Web services are not running, starting services..."
  cli web dev
  if [ $? -ne 0 ]; then
    color_output 31 "Failed to start containers"
    exit 1
  fi
  
  if [ "$1" == "--ci" ]; then
    shift
    docker_compose exec -T web $(get_test_command "$@")
  else
    cli web exec $(get_test_command "$@")
  fi
  message "Downing api containers..."
  docker_compose down web
else
  cli web exec $(get_test_command "$@")
fi

echo "npx playwright test "$@""