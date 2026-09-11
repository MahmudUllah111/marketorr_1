<?php

namespace Tests\Feature;

use Tests\TestCase;

class MarketorrV2Test extends TestCase
{
    public function test_homepage_loads_successfully(): void
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_services_index_loads(): void
    {
        $response = $this->get('/services');
        $response->assertStatus(200);
    }

    public function test_primary_service_pages_load(): void
    {
        foreach (['branding', 'ui-ux', 'development'] as $slug) {
            $response = $this->get("/services/{$slug}");
            $response->assertStatus(200);
        }
    }

    public function test_legacy_service_routes_redirect_correctly(): void
    {
        $this->get('/services/web-ui-ux')->assertRedirect('/services/ui-ux');
        $this->get('/services/software-ui-ux')->assertRedirect('/services/ui-ux');
        $this->get('/services/mobile-app-ui-ux')->assertRedirect('/services/ui-ux');
        $this->get('/services/web-development')->assertRedirect('/services/development');
    }

    public function test_portfolio_index_loads(): void
    {
        $response = $this->get('/work');
        $response->assertStatus(200);
    }

    public function test_verified_project_case_studies_load(): void
    {
        $projects = ['alarabi-fashion', 'animateuix', 'near-to-nature', 'city-online', 'jute-for-good', 'virgin-trend'];
        foreach ($projects as $slug) {
            $response = $this->get("/work/{$slug}");
            $response->assertStatus(200);
        }
    }

    public function test_company_and_process_pages_load(): void
    {
        $this->get('/about')->assertStatus(200);
        $this->get('/process')->assertStatus(200);
        $this->get('/contact')->assertStatus(200);
        $this->get('/privacy')->assertStatus(200);
        $this->get('/terms')->assertStatus(200);
    }

    public function test_contact_form_submission_stores_and_returns_honest_feedback(): void
    {
        $response = $this->post('/contact', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'company' => 'Acme Corp',
            'type' => 'Branding & Identity',
            'budget' => '$5,000 – $15,000',
            'timeline' => '1 – 3 Months',
            'message' => 'We are looking for a complete brand identity system for our startup.',
        ]);

        $response->assertRedirect();
        $response->assertSessionHas('success', 'Thank you for reaching out. We have received your inquiry and will review your project details.');
    }

    public function test_favicon_assets_are_accessible(): void
    {
        $this->assertFileExists(public_path('favicon.ico'));
        $this->assertFileExists(public_path('favicon.svg'));
        $this->assertFileExists(public_path('favicon-32x32.png'));
        $this->assertFileExists(public_path('favicon-16x16.png'));
        $this->assertFileExists(public_path('apple-touch-icon.png'));
        $this->assertFileExists(public_path('site.webmanifest'));
        $this->assertGreaterThan(0, filesize(public_path('favicon.ico')));
    }
}
