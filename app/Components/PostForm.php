<?php

declare(strict_types = 1);

namespace App\Components;

use App\Model\PostManager;
use App\Model\PostRead;
use App\Model\PostWrite;
use Nette\Application\AbortException;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use Nette\Utils\ArrayHash;
use Webmozart\Assert\Assert;

class PostForm extends Control
{
    public function __construct(
        private readonly PostRead $postRead,
        private readonly PostWrite $postWrite
    )
    {
    }

    public function create(): Form
    {
        $form = new Form();

        $form->addText('title', 'Titulek:')
            ->setRequired();

        $form->addTextArea('content', 'Obsah:')
            ->setRequired();

        $form->addHidden('id');

        $form->addSelect('category', 'Kategorie', $this->postRead->getCategories())
            ->setPrompt('-vyberte-');

        $form->addSubmit('send', 'Uložit');

        $form->onSuccess[] = $this->postFormOK(...);

        return $form;
    }

    /**
     * @throws AbortException
     */
    public function postFormOK(Form $form, ArrayHash $values): void
    {
        $this->postWrite->handleCreatePost($values);

        $presenter = $form->getPresenter();
        Assert::notNull($presenter);
        $presenter->flashMessage("Příspěvek byl úspěšně publikován.", 'success');
        $presenter->redirect('Homepage:detail', PostManager::slugify($values->title));
    }
}