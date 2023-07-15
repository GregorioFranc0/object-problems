from typing import Any

class Collection:
    tasks: Any
    collections: Any
    default: str | None
    name: str | None
    loaded_from: Any
    auto_dash_names: bool
    def __init__(self, *args, **kwargs) -> None: ...
    @classmethod
    def from_module(cls, module, name=None, config=None, loaded_from=None, auto_dash_names=None): ...
    def add_task(self, task, name=None, aliases=None, default=None) -> None: ...
    def add_collection(self, coll, name=None, default=None) -> None: ...
    def subcollection_from_path(self, path): ...
    def task_with_config(self, name): ...
    def to_contexts(self, ignore_unknown_help: bool | None = None): ...
    def subtask_name(self, collection_name, task_name): ...
    def transform(self, name): ...
    @property
    def task_names(self): ...
    def configuration(self, taskpath=None): ...
    def configure(self, options) -> None: ...
    def serialized(self): ...