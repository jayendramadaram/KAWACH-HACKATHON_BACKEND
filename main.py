import requests
import json

# testing broo testing
urls = {
    'auth': [
        '/auth/Signup',
        '/auth/Signin',
        '/auth/requestOtp',
        '/auth/verifyOTP',
        '/auth/hehe',
    ],
    'user': [
        '/user/me',
        '/user/edit'
    ]
}

data = {
    'auth': {
        'Signup': {
            'username': 'mikasa',
            'phnum': '9100572305',
            'password': 'erenily'
        },
        'Signin': {
            'phnum': '9100572305',
            'password': 'erenily'
        },
        'verify': {
            'OTP': 919465,
            'email': '9100572305'
        },

    },
    'user': {
        'edit': {
            'username': 'Mikasa',
            'phnum': '9100572305',
            'password': 'erenIly'
        }
    }
}


JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTY3OTMzODc4MywiZXhwIjoxNjc5NDI1MTgzfQ.ySp80ZIHb1ney46hlHDszJXANBBvpnaA4XDpc4SwQfc"
resp = requests.post(
    f'http://localhost:3333{urls["user"][1]}', data=data['user']['edit'], headers={
        'Authorization': f'Bearer {JWT_TOKEN}'
    })

# resp = requests.get(f'http://localhost:3333{urls["user"][0]}', headers={
#     'Authorization': f'Bearer {JWT_TOKEN}'
# })
print(resp.text, resp.status_code)
