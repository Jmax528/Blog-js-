<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name'           => 'John Smith',
            'email'          => 'John_smith@gmail.com',
            'password'       => Hash::make('password'),
            'remember_token' => str_random(10),


        ]);
    }
}
