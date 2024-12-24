<?php

declare(strict_types = 1);

namespace App\Model;

use DateTime;
use Nette;
use Nette\Database\Explorer;
use Nette\Database\Table\ActiveRow;
use Nette\Utils\ArrayHash;
use Webmozart\Assert\Assert;

final class PostManager
{
    public const WORDS_PER_MINUTE = 100;

    public static function getMinutesToReadPost(?string $content): float
    {
        $wordCount = str_word_count(strip_tags($content), 0, "ěščřžýáíéůúďňóť");

        return ceil($wordCount / self::WORDS_PER_MINUTE);
    }

    /**
     * @throws \RuntimeException
     */
    public static function slugify(?string $originalText, string $divider = '-'): string
    {
        // replace non letter or digits by divider
        $text = preg_replace('#[^\pL\d]+#u', $divider, $originalText);

        // transliterate
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
        Assert::notFalse($text);

        // remove unwanted characters
        $text = preg_replace('#[^-\w]+#', '', $text);

        $text = trim($text, $divider);
        // remove duplicate divider
        $text = preg_replace('#-+#', $divider, $text);
        $text = strtolower($text);

        if ($text === '') {
            throw new \RuntimeException('slug can not be created');
        }

        return $text;
    }
}
