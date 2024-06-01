<?php

namespace App\Entity;

use App\Repository\EstateRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EstateRepository::class)]
class Estate
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]

    private ?string $name = null;  //The name of the estate 

    #[ORM\Column(length: 255)]
    private ?string $location = null; //The geographic location of the estate
    #[ORM\Column(length: 255)]
    private ?string $area = null; //The total area of the estate(could be in square meters,acres,etc)

    #[ORM\Column]
    private ?int $price = null; //he selling or renting price of the estate.

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null; // A detailed description of the estate

    #[ORM\Column(length: 255)]
    private ?string $estate_type = null; // The type of estate (e.g., residential, commercial, industrial).

    #[ORM\Column(length: 255)]
    private ?string $status = null; //The current status of the estate (e.g., available, sold, rented).

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $listing_date = null; //The date when the estate was listed on the market.

    #[ORM\Column(length: 255)]
    private ?string $images = null; // URLs to images of the estate.

    #[ORM\Column]
    private ?int $agent_id = null; //An identifier for the agent responsible for the estate.

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): static
    {
        $this->location = $location;

        return $this;
    }

    public function getArea(): ?string
    {
        return $this->area;
    }

    public function setArea(string $area): static
    {
        $this->area = $area;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getEstateType(): ?string
    {
        return $this->estate_type;
    }

    public function setEstateType(string $estate_type): static
    {
        $this->estate_type = $estate_type;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getListingDate(): ?\DateTimeInterface
    {
        return $this->listing_date;
    }

    public function setListingDate(\DateTimeInterface $listing_date): static
    {
        $this->listing_date = $listing_date;

        return $this;
    }

    public function getImages(): ?string
    {
        return $this->images;
    }

    public function setImages(string $images): static
    {
        $this->images = $images;

        return $this;
    }

    public function getAgentId(): ?int
    {
        return $this->agent_id;
    }

    public function setAgentId(int $agent_id): static
    {
        $this->agent_id = $agent_id;

        return $this;
    }
}
