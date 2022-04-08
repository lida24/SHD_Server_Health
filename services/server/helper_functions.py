import json

def load_json():
    print("loading json...start")
    global  __data_columns

    with open("temp_log.json", "r") as f:
        __data_columns = json.load(f)['heatmap']

def get_heatmap():
    return __data_columns

if __name__ == '__main__':
    load_json()
    print(get_heatmap())