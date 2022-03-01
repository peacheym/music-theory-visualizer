#!/usr/bin/python3

import numpy as np
import pandas as pd


df = pd.read_csv('chord-structure.csv')

print(df.head())
print()
print(df['chord_root'].unique(), "# of unique roots:", len(df['chord_root'].unique())) 
print()
print(df['chord_type'].unique(), "# of unique chord types:", len(df['chord_root'].unique())) 


print(df.loc[df['chord_type'] == 'maj'] )