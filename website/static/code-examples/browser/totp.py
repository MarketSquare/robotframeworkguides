import pyotp

def get_totp(secret):
    totp = pyotp.TOTP(secret)
    return totp.now()