<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlan = [
            [
                'name' => 'Basic',
                'price' => 259000,
                'active_period_in_month' => 3,
                'features' => json_encode(['Feature 1', 'Feature 2', 'Feature 3'])
            ],
            [
                'name' => 'Premium',
                'price' => 799000,
                'active_period_in_month' => 6,
                'features' => json_encode(['Feature 1', 'Feature 2', 'Feature 3' , 'Feature 4', 'Feature 5'])
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlan);
    }
}
