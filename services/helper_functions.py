import json
import random
import webcolors

def load_json_temp_log(path: str = "temp_log.json") -> dict:

    with open("temp_log.json", "r") as f:
        return json.loads(f.read())

def int_to_hex(i: int) -> str:
    return f"{i:02X}"

def set_color(temperature: int) -> str:
    bg_color = ""

    if temperature == 0:
        bg_color = "#4502f0"
    elif 5 >= temperature > 0:
        bg_color = "#0295f0"
    elif 10 >= temperature > 5:
        bg_color = "#02dcf0"
    elif 15 >= temperature > 10:
        bg_color = "#02f0c8"
    elif 20 >= temperature > 15:
        bg_color = "#02f099"
    elif 25 >= temperature > 20:
        bg_color = "#02f04d"
    elif 30 >= temperature > 25:
        bg_color = "#95f002"
    elif 35 >= temperature > 30:
        bg_color = "#e4f002"
    elif 40 >= temperature > 35:
        bg_color = "#f0c402"
    elif 45 >= temperature > 40:
        bg_color = "#f08502"
    elif 50 >= temperature > 45:
        bg_color = "#f00202"
    return bg_color