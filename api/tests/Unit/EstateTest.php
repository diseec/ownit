<?php

namespace App\Tests;

use PHPUnit\Framework\TestCase;
use App\Entity\Estate;

class EstateTest extends TestCase
{

    public function testSomething(): void
    {
        $estate = new Estate();
        $estate->setName('Test Estate');
        $estate->setPrice(200);
        $estate->setImages('image1');
        $this->assertEquals($estate->getName(), 'Test Estate');
        $this->assertIsNumeric($estate->getPrice());
        $this->assertNotEmpty($estate->getImages());
    }
}
