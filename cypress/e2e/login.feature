Feature: Login to Application

    As a valid user
    l want to login into Application

    Scenario: Valid Login
        Given l open login page
        When l submit login
        Then 1 should see homepage