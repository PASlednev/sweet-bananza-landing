# Sweet Bonanza — что нужно по картинкам

Дата: 2026-08-21 · сайт `sweet-bananza-landing`

Как это работает: каждая картинка на своём месте на странице уже стоит заглушкой с точным именем файла. Кладёшь готовый файл в `assets/` под ровно этим именем, говоришь мне — и я заменю заглушки на настоящие `<img>` с alt и подписью за один проход. Имена придумывать не надо, они уже зашиты в страницы.

**Формат везде WebP.** Размер — минимум указанный, больше можно, меньше нельзя. Вес — потолок.

---

## Часть 1. Брендовые ассеты — 4 файла

Сейчас на их местах лежат файлы, снятые с icf-landing, то есть на сайте про конфеты стоят иконки про рыбалку. Это надо заменить в первую очередь, потому что видно в каждой вкладке браузера.

| # | Файл | Размер | Вес | Что на картинке |
|---|---|---|---|---|
| B1 | `logo.webp` | 244x196 или пропорционально | до 40 КБ | Логотип сайта для шапки. Отображается высотой 36–42px, значит должен читаться мелким. Сейчас стоит логотип Ice Fishing |
| B2 | `favicon.ico` | 16x16 + 32x32 + 48x48 в одном ico | до 20 КБ | Иконка вкладки. Сейчас от Ice Fishing |
| B3 | `apple-touch-icon.png` | 180x180 PNG | до 70 КБ | Иконка для iOS при добавлении на экран. Сейчас от Ice Fishing |
| B4 | `author-ryan.jpg` | 52x52 | до 20 КБ | Фото автора в байлайне. Это ваш сквозной ассет, уже стоит правильный — трогать не нужно, если Ryan Murton остаётся автором |

---

## Часть 2. Контентные картинки — 21 файл

### Hub (main page) — `/` · 4 шт.

| # | Файл | Размер | Вес | Что должно быть на картинке | Подпись под картинкой |
|---|---|---|---|---|---|
| 1 | `sweet-bonanza-slot-grid.webp` **(og:image)** | 1200x675 | 150 KB | СКРИНШОТ: base game grid, captured from the licensed provider demo | The Sweet Bonanza grid pays matching symbols anywhere, not on paylines. |
| 2 | `sweet-bonanza-tumble-sequence.webp` | 1200x675 | 150 KB | СКРИНШОТ: two-frame before and after of a tumble, from the demo | One paid spin can resolve into a chain of tumble wins. |
| 3 | `sweet-bonanza-lollipop-scatter.webp` | 1200x675 | 150 KB | СКРИНШОТ: scatter trigger moment, from the demo | The lollipop scatter is the free spins trigger. |
| 4 | `sweet-bonanza-how-to-play-steps.webp` | 1200x800 | 120 KB | Custom illustration, built from the how-to section on this page | — |

### RTP & Max Win — `/sweet-bonanza-rtp-volatility/` · 4 шт.

| # | Файл | Размер | Вес | Что должно быть на картинке | Подпись под картинкой |
|---|---|---|---|---|---|
| 5 | `sweet-bonanza-rtp-panel.webp` **(og:image)** | 1000x750 | 120 KB | СКРИНШОТ: in-game info panel showing the RTP line | The only RTP that applies to you is the one in your operator's game panel. |
| 6 | `sweet-bonanza-volatility-chart.webp` | 1200x700 | 100 KB | Custom illustration, generic distribution shape, no game-specific claims | High volatility means rarer wins with a wider spread of outcomes. |
| 7 | `sweet-bonanza-multiplier-symbols.webp` | 1200x675 | 150 KB | СКРИНШОТ: free spins round with multiplier symbols visible | Multiplier symbols apply to a completed tumble chain. |
| 8 | `sweet-bonanza-figures-comparison.webp` | 1200x900 | 130 KB | СХЕМА: build from the provider game sheets once every figure is confirmed | Each release publishes its own figures. |

### Candyland — `/sweet-bonanza-candyland/` · 4 шт.

| # | Файл | Размер | Вес | Что должно быть на картинке | Подпись под картинкой |
|---|---|---|---|---|---|
| 9 | `sweet-bonanza-candyland-wheel.webp` **(og:image)** | 1200x675 | 150 KB | СКРИНШОТ: live table view. CONFIRM streaming and screenshot permission first | Candyland is a live hosted game show, not a slot. |
| 10 | `candyland-vs-slot-comparison.webp` | 1200x700 | 110 KB | Custom illustration, built from the comparison section on this page | — |
| 11 | `sweet-bonanza-candyland-wheel-diagram.webp` | 1000x1000 | 120 KB | СХЕМА: annotated wheel diagram, built after segment layout is confirmed | — |
| 12 | `sweet-bonanza-candyland-results-panel.webp` | 900x600 | 100 KB | СКРИНШОТ: results history panel from the live table | A results panel records what happened. It predicts nothing. |

### Slingo — `/slingo-sweet-bonanza/` · 3 шт.

| # | Файл | Размер | Вес | Что должно быть на картинке | Подпись под картинкой |
|---|---|---|---|---|---|
| 13 | `slingo-sweet-bonanza-grid.webp` **(og:image)** | 1000x1000 | 130 KB | СКРИНШОТ: Slingo grid mid-game, from the demo | Slingo progress is measured in completed lines, not symbol combinations. |
| 14 | `slingo-sweet-bonanza-ladder.webp` | 700x1000 | 110 KB | СКРИНШОТ: prize ladder panel, from the demo | The ladder is where the value sits, so read it before your first stake. |
| 15 | `slingo-extra-spin-pricing.webp` | 900x600 | 100 KB | СКРИНШОТ: extra spin purchase prompt | Extra spin prices rise step by step, so decide a total budget first. |

### Bonanza 1000 — `/sweet-bonanza-1000/` · 2 шт.

| # | Файл | Размер | Вес | Что должно быть на картинке | Подпись под картинкой |
|---|---|---|---|---|---|
| 16 | `sweet-bonanza-1000-grid.webp` **(og:image)** | 1200x675 | 150 KB | СКРИНШОТ: Sweet Bonanza 1000 base game, from the demo | Sweet Bonanza 1000 keeps the scatter pays grid and the tumble feature. |
| 17 | `sweet-bonanza-1000-multipliers.webp` | 1200x675 | 150 KB | СКРИНШОТ: free spins round with multiplier symbols visible | The multiplier ceiling is the headline change in the 1000 release. |

### Is It Legit? — `/is-sweet-bonanza-legit/` · 4 шт.

| # | Файл | Размер | Вес | Что должно быть на картинке | Подпись под картинкой |
|---|---|---|---|---|---|
| 18 | `licensed-operator-licence-check.webp` **(og:image)** | 1200x700 | 110 KB | Custom illustration, anonymised, no real operator branding | Verify the licence number on the regulator register, not on the operator's own page. |
| 19 | `fake-sweet-bonanza-app-warning.webp` | 1200x700 | 110 KB | Custom illustration, no real app store branding, no clickable scam example | A downloadable app promising real payouts is a warning sign, not a convenience. |
| 20 | `slot-predictor-myth-diagram.webp` | 1200x700 | 110 KB | Custom illustration, built from the myth-busting section on this page | Independent outcomes carry no memory, so no history predicts the next spin. |
| 21 | `responsible-gambling-tools.webp` | 1200x700 | 110 KB | Custom illustration, anonymised operator interface | Set limits on day one, not after a losing run. |

---

## Часть 3. На что обратить внимание

**og:image конфликтует по размеру.** Таблица SEO для каждой страницы объявляет `og:image` размером 1200x675, но целевой файл берёт первый по счёту с этой страницы, а у части из них в той же таблице размер другой: `sweet-bonanza-rtp-panel.webp` это 1000x750, `slingo-sweet-bonanza-grid.webp` это 1000x1000. Соцсети режут такие превью криво. Варианты: либо отдать эти два файла сразу в 1200x675, либо сделать по одному отдельному файлу на страницу под шеринг. Скажи, что выбираешь.

**Разрешения на скриншоты.** 11 из 21 файлов это скриншоты из игры. По Candyland таблица отдельно предупреждает: сначала подтвердить право на скриншот и стрим живого стола. Демка Pragmatic Play у нас рабочая, слоты снять можно, а живой стол Candyland — вопрос.

**Логотип провайдера в статье.** Таблица просила `sweet-bonanza-provider-pragmatic-play.webp` внутри текста хаба. Я этот блок убрал, потому что логотип уже стоит в футере и дублировать его в статье незачем. Если считаешь нужным — верну.

**Картинка-сравнение версий.** Таблица просила `sweet-bonanza-vs-1000-comparison.webp`. Я вместо неё сделал живую HTML-таблицу на странице 1000, потому что все цифры теперь есть от провайдера и таблица работает лучше картинки: индексируется, читается на телефоне, правится текстом. Если картинка всё равно нужна — верну заглушку.

**Уже лежит без дела:** `gamingrealms-logo.svg`. Из футера я его убрал, когда сводил футер к единому виду. Если захочешь показать разработчика Slingo визуально внутри страницы — файл на месте.
