<?php

declare(strict_types = 1);

namespace MyClass;

use Latte\Engine;
use Nette\Utils\Paginator;

final class Pager
{
    private Paginator $pager;

    public function __construct(
        int $count,
        private Engine $latte,
        Paginator $paginator = new Paginator(),
        int $page = 1,
        int $itemsPerPage = 10,
        string $tempDir = '/temp'
    )
    {
        $this->pager = $paginator->setItemCount($count)
            ->setItemsPerPage($itemsPerPage)
            ->setPage($page);

        $this->latte = (new Engine())->setTempDirectory($tempDir);
    }

    public function render(): void
    {
        $this->latte->render(__DIR__ . '/templates/pager.latte', ['paginator' => $this->pager]);
    }
}