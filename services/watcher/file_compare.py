import os, json, re, shutil

path1 = os.getcwd() + "/temp_log.json"
path2 = os.getcwd() + "/temp_log.json.bkup"

def json_compare(json1, json2):
    msg = ""
    original_heatmap = [i for i in json1]

    for i in range(len(json1)):
        if json1[i] != json2[i]:
            msg += "heatmap has changed from " + str(json2[i]) + " to " + str(json1[i]) + "\n"
                    
    return msg

def convert_format(json_content):
    lis = ['{', '}', '[', ']', ',']
    l = []

    for i in json_content:
        if i.strip() not in lis:
            l.append(i)

    return [json.loads(re.sub(r'\'', '"', i)) for i in l[1:]]

def file_cmp(p1, p2):

    with open(path1) as infile:
        f1 = infile.read().replace(',', '').strip(' ').split('\n')

    with open(path2) as outfile:
        f2 = outfile.read().replace(',', '').strip(' ').split('\n')

    update_content = convert_format(f1)

    original_content = convert_format(f2)

    print(json_compare(update_content, original_content))

    if update_content or original_content:
        shutil.copy(p1, p2)

if __name__=="__main__":
    file_cmp(path1, path2)