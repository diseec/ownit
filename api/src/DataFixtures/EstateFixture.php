<?php

namespace App\DataFixtures;

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class EstateFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $process = new Process(['node', 'public/js/EstateFixture.js']);
        $process->run();

        // Check for errors
        if (!$process->isSuccessful()) {
            throw new ProcessFailedException($process);
        }

        echo $process->getOutput();
    }
}
