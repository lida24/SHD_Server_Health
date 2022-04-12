#!/usr/bin/env python3

import os, sys
import json
import re
import time
import random
from datetime import datetime

# -----------------------------------------------------------------------------

shd_temps = [[] for i in range(8)]
for j in range(8):
    shd_temps[j] = [0 for i in range(15)]

# -----------------------------------------------------------------------------


# -----------------------------------------------------------------------------

if __name__ == '__main__':

    jsonfile = 'temp_log.json'
    tmpfile = 'tmp.json'

    for col in range(8):
        dr = random.randint(0, col+1)
        for row in range(15):
            shd_temps[col][row] = random.randint(30+dr, 52)

    cts = []
    ct = random.randint(32, 64)
    while 1:
        n = datetime.now()
        snow = '{}-{:02d}-{:02d} + {:02d}:{:02d}:{:02d}'.format(n.year, n.month, n.day, n.hour, n.minute, n.second)
        for col in range(8):
            dr = random.randint(0, 5)
            for row in range(15):
                shd_temps[col][row] += random.randint(-2, 2)
                if shd_temps[col][row] < 30:
                    shd_temps[col][row] = 30
                if shd_temps[col][row] > 54:
                    shd_temps[col][row] = 54
        print('{} --------------------'.format(snow))
        print('shd_temps:')
        print(shd_temps)
        ct += random.randint(-2, 2)
        if ct < 32:
            ct = 32
        if ct > 64:
            ct = 64
        if (len(cts) > 31):
            cts.pop(0)
        cts.append( [ct, int(n.timestamp())] )
        jout = { 'ts': snow, 'cts': cts, 'heatmap': shd_temps }
        if ((jsonfile is not None) and (tmpfile is not None)):
            with open(tmpfile, 'w') as f:
                j = json.dumps(jout)
                f.write(j)
            os.replace(tmpfile, jsonfile)
        time.sleep(2)

# -----------------------------------------------------------------------------
# EOF