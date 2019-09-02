import requests
import json
input_a = input("a.json_path: ")
with open(input_a, 'rb') as f:
    data_info = json.loads(f.read())

# film_imgs = []
# for img in data_info[100:110]:
#     film_imgs.append({'film_name':img['film_name'],'film_img': img['film_img']})
# print(film_imgs)
# for film_img in film_imgs:
#     response = requests.get(film_img['film_img'])
#     with open("img/" + film_img['film_name'] + '.jpg', 'wb') as f:
#         f.write(response.content)

import os
path = input("static_path: ")
base_dir = os.path.join(path, 'img')
img_info = []
for name in os.listdir(base_dir):
    if 'E.T. 外星人 E.T.' == name:
        continue
    img_info.append(name.replace(".jpg", ''))
# print(img_info)
# print(len(img_info))
result = []
for items in data_info:
    if items['film_name'] not in img_info:
        continue
    for item in img_info:
        if items['film_name'] == item:
            items['film_img'] = os.path.join(base_dir, item+'.jpg')
    result.append(items)
output_path = input("output_path:")
with open(output_path, 'wb') as f:
    f.write(json.dumps(result, ensure_ascii=False).encode())
