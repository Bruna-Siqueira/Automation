Feature: Send Message
    As a user, I want to send a message to a receiver, so that I can be able to communicate faster.

    Scenario Outline: Messsage sent successfully
        When I send a <message> to the <number>
        Then the message must be sent successfully

        Examples:
            | message        | number      |
            | "Test Message" | 12345678901 |
