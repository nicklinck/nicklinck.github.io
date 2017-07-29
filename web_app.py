'''
import boto3


s3 = boto3.resource('s3')

for bucket in s3.buckets.all():
	print(bucket.name)
'''

import MySQLdb
import MySQLdb.cursors

def connect_to_database():

    options = {
      'host': 'nicksdatabaseinstance.cslhtahiirgc.us-west-2.rds.amazonaws.com',
      'user': 'linckn@umich.edu',
      'passwd': 'Okmjiuh739',
      'db': 'nicksdatabaseinstance',
      'cursorclass' : MySQLdb.cursors.DictCursor
    }
    db = MySQLdb.connect(**options)
    db.autocommit(True)
    return db
  
db = connect_to_database()