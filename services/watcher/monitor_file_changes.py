import sys, os
import time
from watchdog.observers import Observer
from watchdog.events import PatternMatchingEventHandler

class MyHandler(PatternMatchingEventHandler):
    patterns = ["*.json"]

    def process(self, event):
        if event.event_type == 'modified':
            os.system("python3 file_compare.py")
        print(event.src_path, event.event_type)

    def on_modified(self, event):
        self.process(event)

    def on_created(self, event):
        self.process(event)


if __name__ == '__main__':
    args = sys.argv[1:]
    event_handler = MyHandler()
    observer = Observer()
    path_to_monitor = args[0] if args else '.'
    observer.schedule(event_handler, path=path_to_monitor, recursive=False)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()

    observer.join()

