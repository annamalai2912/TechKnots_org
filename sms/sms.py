import requests

# Define the API endpoint and API key
api_key = "u61lTuODI3C1"
url = "https://www.circuitdigest.cloud/send_sms?ID=101"

# Set the payload with the recipient's mobile number and dynamic variables
payload = {
    "mobiles": "919345341879",  # Replace with the recipient's mobile number
    "var1": "John Doe",       # Replace with your first variable (e.g., recipient name)
    "var2": "Your package is ready."  # Replace with your second variable (e.g., custom message)
}

# Set the headers with the API key
headers = {
    "Authorization": api_key,
    "Content-Type": "application/json"
}

# Send the POST request
response = requests.post(url, headers=headers, json=payload)

# Handle the response
if response.status_code == 200:
    print("SMS sent successfully!")
    print("Response:", response.json())
else:
    print("Failed to send SMS. Status code:", response.status_code)
    print("Error:", response.text)
