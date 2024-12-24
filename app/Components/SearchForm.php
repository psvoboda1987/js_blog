<?php

declare(strict_types = 1);

namespace App\Components;

use App\Presenters\HomepagePresenter;
use Nette\Application\AbortException;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use Nette\Utils\ArrayHash;

final class SearchForm extends Control
{
    public function render(): void
    {
        $this->getTemplate()->setFile(__DIR__ . '/../templates/Forms/search.latte');
        $this->getTemplate()->render();
    }

    public function create(): Form
    {
        $form = new Form;

        $form->addText('search');

        $form->addSubmit('send');

        $form->onSuccess[] = $this->searchFormOK(...);

        return $form;
    }

    /**
     * @throws AbortException
     */
    private function searchFormOK(Form $form, ArrayHash $values): void
    {
        /** @var HomepagePresenter $presenter */
        $presenter = $form->getPresenter();
        $presenter->setSearch($values->search);
        $presenter->redirect('this', []);
    }
}
