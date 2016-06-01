# Web SQL Database

## Web SQL Database

一个完整的例子:

```js
var db = window.openDatabase('todo', '0.0.9', 'todo', 2 * 1024 * 1024);
db.transaction(
    function(transaction) {
      transaction.executeSql('CREATE TABLE IF NOT EXISTS CONF (k unique, v)');
      transaction.executeSql('INSERT INTO CONF (k, v) VALUES (?, ?)', ['msg', 'ok'], 
          function(t, result) {
            console.log('result', result);
          }, 
          function(t, error) {
            console.log(error);
          }
      );
    },
    function() {
      console.log('error');
    },
    function() {
      console.log('success');
    }
);
```

DevTools 中可以看到类似的变化:

<img src="http://gtms03.alicdn.com/tps/i3/TB1fGgUJVXXXXchXXXXKUPqZpXX-1494-276.png" width="700">

由于 W3C 停止了对 Web SQL Database 规范的继续维护, MDN 上已经找不到 API 定义了, 不过仍然可以通过 [W3C 文档](https://dev.w3.org/html5/webdatabase/#sql) 查看到原始 API 定义。

定义 - `window.openDatabase`

```
[Supplemental, NoInterfaceObject]
interface WindowDatabase {
  Database openDatabase(in DOMString name, in DOMString version, in DOMString displayName, in unsigned long estimatedSize, in optional DatabaseCallback creationCallback);
};
Window implements WindowDatabase;

[Callback=FunctionOnly, NoInterfaceObject]
interface DatabaseCallback {
  void handleEvent(in Database database);
};
```

定义 - `db.transaction(function callbakc(){}, function error(){}, function success(){})`

```
interface Database {
  void transaction(in SQLTransactionCallback callback, in optional SQLTransactionErrorCallback errorCallback, in optional SQLVoidCallback successCallback);
};

[Callback=FunctionOnly, NoInterfaceObject]
interface SQLVoidCallback {
  void handleEvent();
};

[Callback=FunctionOnly, NoInterfaceObject]
interface SQLTransactionCallback {
  void handleEvent(in SQLTransaction transaction);
};

[Callback=FunctionOnly, NoInterfaceObject]
interface SQLTransactionErrorCallback {
  void handleEvent(in SQLError error);
};
```

定义 - `db.executeSql(function(){}, [], function success(){}, function error(){})`

```
typedef sequence<any> ObjectArray;

interface SQLTransaction {
  void executeSql(in DOMString sqlStatement, in optional ObjectArray arguments, in optional SQLStatementCallback callback, in optional SQLStatementErrorCallback errorCallback);
};

[Callback=FunctionOnly, NoInterfaceObject]
interface SQLStatementCallback {
  void handleEvent(in SQLTransaction transaction, in SQLResultSet resultSet);
};

[Callback=FunctionOnly, NoInterfaceObject]
interface SQLStatementErrorCallback {
  boolean handleEvent(in SQLTransaction transaction, in SQLError error);
};

interface SQLResultSet {
  readonly attribute long insertId;
  readonly attribute long rowsAffected;
  readonly attribute SQLResultSetRowList rows;
};
```


## 改造 TodoMVC

详见[代码](https://github.com/luics/web-dev/blob/master/examples/data/TodoMVC-websql.html)