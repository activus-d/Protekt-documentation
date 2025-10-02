---
sidebar_label: 'Set up webhooks for user events'
sidebar_position: 1
---

# Set up webhooks for user events

Protekt webhooks let you receive real-time server-to-server notifications about key authentication events from your web applications. You can then use the received data to trigger automated actions, such as logging events and sending alerts.

## Register your application in the Management portal

Before configuring webhooks, you must register your web application in the Protekt [Management portal](../concepts/management-portal). See the [Register your application](../guides/register-your-application-guide) guide for detailed steps on creating a project, obtaining your API keys, and connecting your project to your web application.

## Access the Webhook interface

After registering your application, click `Webhooks` in the left sidebar of your project dashboard to access the [Webhook interface](../concepts/webhook-interface.md). Then click `Create new endpoint` to begin the setup.

## Configure the webhook endpoint and security

In the `Webhook URL` section, define your destination URL and authentication method to ensure Protekt sends events only to the intended server:

1. Enter the full URL of your receiving server endpoint. This URL must use HTTPS for secure delivery, for example, `https://yourdomain.com/protekt/webhooks`.
2. Configure an authentication method to secure the delivery. Select one of the available options:

  * **Shared secret:** Protekt uses this secret to generate an [Hash-based Message Authentication Code (HMAC)](../concepts/hmac.md) signature that you verify on your server to confirm the payload's authenticity.
  *  **API token:** Protekt includes the token or credentials in each request header. Your server checks these values against what you’ve configured to allow only trusted requests.

3. Click `Verify endpoint` to send a test challenge request. Your endpoint must respond with a `200` status code to confirm ownership.

## Select authentication events

In the `Events` section of the Webhook interface, choose which events will trigger your webhook by checking the boxes next to the ones you want to receive:

* **User login success:** Triggers when a user successfully authenticates
* **User login failure:** Triggers when authentication fails
* **Password reset request:** Triggers when a user requests a password reset
* **Multi-factor authentication completion:** Triggers when a user completes Multi-Factor Authentication (MFA)
* **User registration:** Triggers when a new user account is created
* **Session termination:** Triggers when a user logs out or their session expires

## Customize webhook payload

In the `Payload configuration` section, define the data your webhook delivers in each request and choose the format. _JSON_ is the default and recommended format.

You can include additional metadata such as:

* User details such as email, name, and user ID
* IP address of the authentication request
* Device information such as browser and operating system
* Location data

## Configure retry and failure handling

In the `Retry and failure section`, set how Protekt handles failed webhook deliveries:

* In the `Max retry attempts` field, define the maximum number of retry attempts. The default is 3.
* In the `Retry interval` field, specify the interval between retries in seconds. The default is 60 seconds.
* Check the `Enable dead-letter queue` checkbox to get alerts about persistent delivery failures.
* In the `Failure notification` field, provide an email address or an alternate webhook URL to receive failure notifications.

## Save and test your webhook

After configuring your webhook for retry and failure handling, save and test to ensure everything works as expected:

* Click `Save webhook` to activate your configuration.
* Click `Send test event` to trigger a sample webhook, then check your application logs to verify it was received.
* Once saved, your webhook is active and will begin receiving notifications for the authentication events you selected.
