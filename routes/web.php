<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Project slugs supported (verified real projects + archived concepts for backwards compatibility)
$projectSlugs = 'alarabi-fashion|animateuix|near-to-nature|city-online|jute-for-good|virgin-trend|alibaba-growth|janitorial-leads-pro|nova-fintech|atelier-noir';

// Primary service slugs
$serviceSlugs = 'branding|ui-ux|development';

Route::get('/', fn () => Inertia::render('Home'))->name('home');

// Legacy service route redirects
Route::redirect('/services/web-ui-ux', '/services/ui-ux', 301);
Route::redirect('/services/software-ui-ux', '/services/ui-ux', 301);
Route::redirect('/services/mobile-app-ui-ux', '/services/ui-ux', 301);
Route::redirect('/services/web-development', '/services/development', 301);

// Services routes
Route::get('/services', fn () => Inertia::render('Services/Index'))->name('services.index');
Route::get('/services/{slug}', fn (string $slug) => Inertia::render('Services/Show', [
    'slug' => $slug,
]))->where('slug', $serviceSlugs)->name('services.show');

// Work / Portfolio routes
Route::get('/work', fn () => Inertia::render('Work/Index'))->name('work.index');
Route::get('/work/{slug}', fn (string $slug) => Inertia::render('Work/Show', [
    'slug' => $slug,
]))->where('slug', $projectSlugs)->name('work.show');

// Company routes
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/process', fn () => Inertia::render('Process'))->name('process');
Route::get('/contact', fn () => Inertia::render('ContactPage'))->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// Legal routes
Route::get('/privacy', fn () => Inertia::render('Privacy'))->name('privacy');
Route::get('/terms', fn () => Inertia::render('Terms'))->name('terms');
