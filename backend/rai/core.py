from .helpers import *
from datetime import datetime

class Resume(object):
    def __init__(self, id):
        """Required id on create -- others aren't exactly optional but need to be
           set later somehow.  attribs is a map of other undeclared stuff.
        """
        self.id = id
        self.user = None
        self.attribs = {}
        pass

    def summary(self):
        pass

    def add_attrib(self, name, value):
        pass

class User(object):
    def __init__(self, id, fname, lname, email):
        self.id = id
        self.firstname = fname
        self.lastname = lname
        self.email = email
        self.resumes = []
        self.lastseen = datetime.now()

    def add_resume(self, resume):
        self.resumes.append(resume)

    def __repr__(self):
        return f'User obj for {self.id}'

def foo():
    return 'foo'