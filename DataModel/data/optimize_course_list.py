import json
import re

with open("./course_data.json", encoding='utf-8') as read_file:
    data = json.load(read_file)
for i in data:
    i['courseId'] = str(i['term']) + i['code']

fo = open("opt_course_data.json", "w")
fo.write(json.dumps(data))
fo.close()
