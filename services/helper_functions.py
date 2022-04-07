import json

def load_json_temp_log(path: str = "temp_log.json") -> dict:
    """
    Load the the json data as a dict.
    :param path: path of the json
    :return: the dict containing the portfolio
    """

    with open("temp_log.json", "r") as f:
        return json.loads(f.read())

