<?php

declare(strict_types = 1);

namespace App\Components;

use App\Bootstrap;
use Nette\Application\AbortException;
use Nette\Application\UI\Control;
use Nette\Application\UI\Form;
use Nette\Security\AuthenticationException;
use Nette\Utils\ArrayHash;
use Webmozart\Assert\Assert;

class LoginForm extends Control
{
    public function create(): Form
    {
        $form = new Form();

        $form->addText('login', 'Uživatelské jméno:')
            ->setRequired('Prosím vyplňte své uživatelské jméno.');

        $form->addPassword('password', 'Heslo:')
            ->setRequired('Prosím vyplňte své heslo.');

        $form->addSubmit('send', 'Přihlásit');

        $form->onSuccess[] = $this->loginFormOK(...);

        return $form;
    }

    /**
     * @throws AbortException
     */
    public function loginFormOK(Form $form, ArrayHash $values): void
    {
        $presenter = $form->getPresenter();
        Assert::notNull($presenter);

        try {
            $presenter->getUser()->login($values->login, $values->password);

            $presenter->redirect('Homepage:');
        } catch (AuthenticationException $e) {
            Bootstrap::createLog($e);

            $message = 'Nesprávné přihlašovací jméno nebo heslo.';
            $form->addError($message);
            $presenter->flashMessage($message);
        }
    }
}