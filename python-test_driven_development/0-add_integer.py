#!/usr/bin/python3
""" This module contains features that add two integers
"""


def add_integer(a, b=98):
    """ Add two integers
    """
    if not isinstance(a, int) and not isinstance(a, float):
        raise TypeError("a must be an integer")
    if not isinstance(b, int) and not isinstance(b, float):
        raise TypeError("b must be an integer")
    a = int(a)
    b = int(b)
    return a + b
