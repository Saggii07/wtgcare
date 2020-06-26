# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in wtgcare/__init__.py
from wtgcare import __version__ as version

setup(
	name='wtgcare',
	version=version,
	description='WTG Care',
	author='Swapnil Patil',
	author_email='swapnil.patil@powercon.in',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
