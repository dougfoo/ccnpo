from urllib.request import urlopen
import json
import sys
    
def harvest_posts(name):
    api_url = "https://www.reddit.com/r/" + name + "/.json"
    reddit_resp = urlopen(api_url)
    if not reddit_resp.status == 200:
        raise OSError("Cannot connect to the url '{}', got status {}".format(api_url, reddit_resp.status))
    core_listing = json.loads(reddit_resp.read())
    core_posts = core_listing["data"]["children"]
    return [post["data"] for post in core_posts if post["kind"] == "t3"]
    
    
def count_title_words(posts):
    counts = {}
    for post in posts:
        words = post["title"].split(" ")
        for word in words:
            if word in counts:
                counts[word] += 1
            else:
                counts[word] = 1
    return counts


if __name__ == '__main__':
    user_args = sys.argv[1:]
    sub_name = user_args[0]
    print("Mining title data on /r/" + sub_name)

    posts = harvest_posts(sub_name)
    print ([p['title'] for p in posts[0:10]])
    word_counts = count_title_words(posts)
    for k, v in word_counts.items():
        if (v > 5):
            print("{} = {}".format(k, v))