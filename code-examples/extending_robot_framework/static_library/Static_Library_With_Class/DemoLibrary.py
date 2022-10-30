class DemoLibrary:
    def __init__(self, *args, **kwargs):
        print(f"Sample Library initialized with args: {args} and kwargs: {kwargs}")
 
    def my_keyword(self, *args, **kwargs):
        print(f"Keyword got args: {args} and kwargs: {kwargs}")
        return "Hello World"