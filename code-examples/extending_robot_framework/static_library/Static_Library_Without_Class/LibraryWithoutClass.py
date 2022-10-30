import base64

def encode_as_base64(string):
    """
    Encode string as base64.
    """
    return base64.b64encode(string.encode())

def decode_from_base64(string):
    """
    Decode string from base64.
    """
    return base64.b64decode(string).decode()