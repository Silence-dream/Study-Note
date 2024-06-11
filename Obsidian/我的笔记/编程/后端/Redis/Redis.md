---
title : 文件名
tags : 
- tag
tags : 
- Redis
date created: 2023-08-30, 04:29:02
date modified: 2023-09-18, 02:37:30
---

## Redis 简介

Redis（全称为Remote Dictionary Server）是一个开源的高性能键值对存储系统，具有快速、灵活和可扩展的特性。它是一个基于内存的数据结构存储系统，可以用作数据库、缓存和消息代理。

### Redis 的一些主要特点和用途

- 高性能：Redis 数据存储在内存中，因此能够提供极快的读写操作。它采用单线程模型和异步 I/O，避免了多线程的竞争和阻塞，从而达到了非常高的性能。
- 数据结构多样：Redis 支持多种数据结构，包括字符串（String）、哈希（Hash）、列表（List）、集合（Set）和有序集合（Sorted Set）。这些数据结构提供了丰富的操作命令，使得开发者可以方便地处理各种数据需求。
- 持久化支持：Redis 提供了两种持久化方式，即快照（Snapshotting）和日志追加（Append-only file，AOF）。快照方式将 Redis 内存数据以二进制格式写入磁盘，而 AOF 则通过追加记录 Redis 的操作命令来实现持久化。
- 发布/订阅：Redis 支持发布/订阅模式，可以用作消息代理。发布者将消息发送到指定的频道，订阅者则可以接收和处理这些消息。这种模式在构建实时通信、事件驱动系统和消息队列等场景中非常有用。
- 分布式缓存：Redis可以通过主从复制和分片来实现数据的分布式存储和高可用性。主从复制可以将数据复制到多个从节点，实现读写分离和数据备份。而分片则可以将数据分布在多个Redis节点上，实现横向扩展和负载均衡。
- 事务支持：Redis 支持事务，开发者可以将多个操作组合成一个原子性的操作序列，保证这些操作要么全部执行成功，要么全部不执行。
- 功能丰富：Redis不仅仅是一个简单的缓存，它还提供了许多其他功能，如事务支持、Lua脚本执行、定时任务、原子操作等。这使得开发者可以在Redis中实现更复杂的应用逻辑。

Redis 是一个功能丰富的存储系统，适用于多种场景，包括缓存、会话存储、排行榜、实时分析等。它有广泛的应用，并且拥有活跃的社区支持。

### Redis 与其他 key-value 存储有什么不同？

- Redis 比起其它键值类数据库，值可以包含更复杂的数据类型，并且在数据类型上定义原子操作。Redis 数据类型与基本数据结构密切相关，并直接向程序员公开，无需额外的抽象层。
- Redis 运行在内存中但是可以持久化到磁盘，因此它代表了一种不同的权衡，即在数据集不能大于内存的限制下实现非常高的写入和读取速度。内存数据库的另一个优点是，与磁盘上的相同数据结构相比，复杂数据结构的内存表示更易于操作，因此 Redis 可以做很多事情而内部复杂性很小。同时，因 RDB 和 AOF 两种磁盘持久化方式是不适合随机访问，因为它们是顺序写入的。

### Redis 架构

Redis 主要由有两个程序组成：

- Redis 客户端 redis-cli
- Redis 服务器 redis-server

客户端、服务器可以位于同一台计算机或两台不同的计算机中。

## 数据类型

### 基础数据类型

- 字符串 String
- 列表 List
- 集合 Set
- 有序集合 SortedSet
- 哈希 Hash

### 高级数据类型

- 消息队列 Stream
- 地理空间 Geospatial
- HyperLogLog
- 位图 Bitmap
- 位域 Bitfield

## 安装方式

Windows 推荐通过 WSL 或者 Docker 进行安装

[Download | Redis](https://redis.io/download/)

Mac 推荐使用 homebrew 进行直接安装

```sh
brew install redis
```

## 可视化工具

Redisinsight

[RedisInsight  下载地址](https://redis.com/redis-enterprise/redis-insight/#insight-form)

![image-20230918170640041](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202309181706218.png)



## 常用命令

### 基础操作

| 命令                              | 说明                      |
| ------------------------------- | ----------------------- |
| redis-server                    | 启动 redis                |
| redis-cli telent 127.0.0.1:6379 | 连接到 redis               |
| redis-cli -rew                  | 连接到 redis(可显示中文)        |
| quit/exit                       | 退出 redis                |
| TTL key                         | 查看 key 过期时间 -2为已经过期     |
| KEYS *                          | 查看所有的 key               |
| EXPIRE key seconds              | 设置 key 的过期时间为 seconds 秒 |
| RENAME oldkey newkey            | 重命名 key 的值              |

### 字符串 String

| 命令                               | 说明                                                    | 时间复杂度 |
| -------------------------------- | ----------------------------------------------------- | ----- |
| SET key value                    | 设置 key 的值为 value                                      | O(1)  |
| GET key                          | 返回键 key 的值设置为 value                                   | O(1)  |
| DEL key [key...]                 | 删除给定的一个或多个键的值                                         | O(1)  |
| SETEX key seconds value          | 将键 key 的值设置为 value，并且超时时间为 seconds 秒                  | O(1)  |
| PSETEX key milliseconds value    | 将键 key 的值设置为 value，并且超时时间为 milliseconds 毫秒            | O(1)  |
| SETNX key value                  | 只有在键key不存在的情况下，将 key 的值设置为 value                      | O(1)  |
| GETSET key value                 | 将键 key 的值为 value，并返回设置前的旧值。若没有旧值则返回 nil               | O(1)  |
| MSET key value [key value ...]   | 同时为多个键设置值                                             | O(N)  |
| MGET key [key ...]               | 返回给定的⼀个或多个键的值                                         | O(N)  |
| MSETNX key value [key value ...] | 当所有给定的 key 都不存在时才同时为多个键设置值。只要有⼀个key已经存在，那么所有值都不会被继续设置 | O(N)  |
| STRLEN key                       | 获取键为 key 的值的字符串⻓度。                                    |       |





### 列表 List

相当于数组

| 命令                                        | 说明                                                                                                       | 时间复杂度  |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------ |
| LPUSH key element [element ...]           | 将⼀个或多个元素添加到列表key的表头（左侧）,多个值则从左⾄右依次插⼊表头；<br />如果列表key不存在，则创建⼀个然后执⾏LPUSH插⼊操作；<br />如果列表key存在但不是列表类型，则返回错误。 | O(1)   |
| LRANGE key start stop                     | 返回列表key中，位于start和stop之间的元素（包括start和stop）                                                                 | O(S+N) |
| LPUSHX key element [element ...]          | 当且仅当key存在并且是⼀个列表的时候，才执⾏LPUSH操作                                                                           | O(1)   |
| RPUSH key element [element ...]           | 将⼀个或多个元素添加到列表key的表尾（右侧）,多个值则从左⾄右依次插⼊表尾；<br />如果列表key不存在，则创建⼀个然后执⾏RPUSH插⼊操作；<br />如果列表key存在但不是列表类型，则返回错误。 | O(1)   |
| RPUSHX key element [element ...]          | 当且仅当key存在并且是⼀个列表的时候，才执⾏RPUSH操作。                                                                          | O(1)   |
| LPOP key [count ...]                      | 将⼀个或count个元素从列表头⽅向移除并将其返回；<br />如果列表key不存在，则返回nil。                                                       | O(1)   |
| RPOP key [count ...]                      | 将⼀个或count个元素从列表头⽅向移除并将其返回；<br />如果列表key不存在，则返回nil。                                                       | O(1)   |
| RPOPLPUSH source destination              | 在⼀个原⼦时间内，将source列表的尾部元素弹出，并插⼊到destination列表的头 部，返回该元素；如果列表key不存在，则返回nil。                                 | O(1)   |
| LREM key count element                    | 移除列表key中与element相等的count个元素，返回被移除的元素的数量                                                                  | O(N)   |
| LINDEX key index                          | 返回列表key中索引为index的元素                                                                                      | O(N)   |
| LINSERT key BEFORE \| AFTER pivot element | 将元素element插⼊到列表key中，位于 pivot(元素)之前(BEFORE)或者之后(AFTER)。                                                   | O(N)   |
| LSET key index element                    | 将列表key中索引为index的元素设置为element。                                                                            | O(N)   |
| LRANGE key start stop                     | 返回列表key中，位于start和stop之间的元素（包括start和stop）                                                                 | O(S+N) |
| LTRIM key start stop                      | 只保留列表key中索引为start和stop之间的元素                                                                              | O(N)   |
| BLPOP key [key ...] timeout               | 列表阻塞式(Blocking)弹出。是LPOP的阻塞版本，当列表中没有任何元素时阻塞， 直到超时或发现新的可弹出元素为⽌                                             | O(1)   |
| BRPOP key [key ...] timeout               | 列表阻塞式(Blocking)弹出。是RPOP的阻塞版本，当列表中没有任何元素时阻塞， 直到超时或发现新的可弹出元素为⽌                                             | O(1)   |
| BRPOPLPUSH source destination timeout     | 是RPOPLPUSH的阻塞版本，当列表source中没有任何元素时阻塞， 直到超时或发现新的可弹出元素为⽌                                                    | O(1)   |





### 集合 Sets

存储于内的元素是唯一的不重复的

| 命令                                                  | 说明                                                         | 时间复杂度 |
| ----------------------------------------------------- | ------------------------------------------------------------ | ---------- |
| SADD key member [member ...]                          | 将⼀个或多个元素加⼊到集合key中。已存在于集合中的元素将被忽略。 | O(N)       |
| SREM key member [member ...]                          | 将⼀个或多个元素从集合key中移除。不存在的member元素将被忽略  | O(N)       |
| SMEMBERS key                                          | 返回集合key中的所有成员                                      | O(N)       |
| SISMEMBER key member                                  | 判断MEMBER是否是集合key的成员，是返回1，不是或key不存在返回0 | O(1)       |
| SPOP key [count]                                      | 移除并返回集合key中的⼀个或count个随机元素                   | O(1)       |
| SRANDMEMBER key [count]                               | 和SPOP类似，区别在于SRANDMEMBER只返回不移除                  | O(1)       |
| SMOVE source destination member                       | 将member元素从source集合移动到destination集合。（原⼦性操作） | O(1)       |
| SCARD key                                             | 返回集合key的基数（集合中元素的数量）                        | O(1)       |
| SCAN cursor [MATCH pattern] [COUNT count] [TYPE type] | 增量迭代，是⼀个基于游标的迭代器。类似的命令还有HSCAN、SSCAN、ZSCAN。 |            |
| SINTER key [key ...]                                  | 返回⼀个集合的全部成员，多个集合则返回交集                   | O(N*M)     |
| SINTERSTORE destination key [key ...]                 | 类似SINTER，区别是SINTERSTORE会保存结果集到destination集合中，⽽不是单 纯返回。 若destination存在则将其覆盖，destination可以是key本身 | O(N*M)     |
| SUNION key [key ...]                                  | 返回⼀个集合的全部成员，多个集合则返回并集                   | O(N*M)     |
| SUNIONSTORE destination key [key ...]                 | 类似SUNION，区别是SUNIONSTORE会保存结果集到destination集合中，⽽不是 单纯返回。 若destination存在则将其覆盖，destination可以是key本身 | O(N*M)     |
| SDIFF key [key ...]                                   | 返回⼀个集合的全部成员，多个集合则返回差集                   | O(N*M)     |
| SDIFFSTORE destination key [key ...]                  | 类似SDIFF，区别是SDIFFSTORE会保存结果集到destination集合中，⽽不是单纯返 回。 若destination存在则将其覆盖，destination可以是key本身。 | O(N*M)     |



### 有序集合 SortedSets

有序集合的每个元素都会关联一个浮点类型的分数,然后按照这个分数来对集合中的元素进行从小到大的排序,有序集合的成员是唯一的,但是分数是可以重复的

| 命令                                                         | 说明                                                         | 时间复杂度 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| ZADD key [NX \|\XX] [GT\|LT] [CH] [INCR] score member [score member ..] | 将⼀个或多个member元素及其分数score加⼊到有序集合key中       | O(M\*LogN) |
| ZREM key member [member ..]                                  | 将⼀个或多个成员从集合key中移除。不存在的member成员将被忽略  | O(N)       |
| ZSCORE key member                                            | 返回有序集合key中的成员member的分数值（score）               | O(1)       |
| ZINCRBY key increment member                                 | 为有序集合key的成员member的分数值score加上⼀个增量increment  | O(LogN)    |
| ZCARD key                                                    | 返回有序集合key的基数（集合中成员的数量）                    | O(1)       |
| ZCOUNT key min max                                           | 返回有序集合key中，分数值score在min和max之间（包括等于）的成员的数量 | O(1)       |
| ZRANGE key start stop [BYSCORE\|BYLEX] [REV] [LIMIT offset count] [WITHSCORES] | 返回有序集合key中指定区间内的成员。（从⼩到⼤排列）          | O(LogN+M)  |
| ZREVRANGE key start stop [WITHSCORES]                        | 返回有序集合key中指定区间内的成员。（从⼤到⼩排列）          | O(LogN+M)  |
| ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]  | 返回有序集合key中所有score值在指定[min,max]区间内的成员。（从⼩到⼤排列） | O(LogN+M)  |
| ZREVRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count] | 返回有序集合key中所有score值在指定区间内的成员。（从⼤到⼩排列） | O(LogN+M)  |
| ZRANK key member                                             | 返回有序集合key中成员member的排名。（按照score从⼩到⼤排列） | O(LogN)    |
| ZREVRANK key member                                          | 返回有序集合key中成员member的排名。（按照score从⼤到⼩排列） | O(LogN)    |
| ZREMRANGEBYRANK key start stop                               | 移除有序集合key中指定排名区间内的所有member。（按照score从⼩到⼤排列） | O(LogN+M)  |
| ZREMRANGEBYSCORE key min max                                 | 移除有序集合key中指定分数区间内的所有member。（按照score从⼩到⼤排列） | O(LogN+M)  |
| ZREMRANGEBYLEX key min max                                   | 移除有序集合key中指定字典序区间内的所有member。（按照字典序从⼩到⼤排列） | O(LogN+M)  |
| ZRANGEBYLEX key min max [LIMIT offset count]                 | 返回有序集合key中所有字典序在指定区间内的成员。（从⼤到⼩排列） | O(LogN)    |
| ZLEXCOUNT key min max                                        | 返回有序集合key中指定字典序区间内的所有member的数量          | O(LogN)    |
| ZSCAN cursor [MATCH pattern] [COUNT count] [TYPE type]       | 增量迭代，是⼀个基于游标的迭代器。类似的命令还有HSCAN、SSCAN、SCAN |            |
| ZUNIONSTORE destination numkeys key [key ...]                | 返回⼀个或多个有序集合的并集，并存储到destination中。        |            |
| ZINTERSTORE destination numkeys key [key ...]                | 返回⼀个或多个有序集合的交集，并存储到destination中。        |            |



### 哈希 Hashes

哈希是一个键值对的集合一般用于存储对象

| 命令                                           | 说明                                                         | 时间复杂度 |
| ---------------------------------------------- | ------------------------------------------------------------ | ---------- |
| HSET key field value [field value ...]         | 将哈希表key中的域field的值设置为value                        | O(1)       |
| HSETNX key field value                         | 当且仅当field不存在的时候，将哈希表key中的域field的值设置为value | O(1)       |
| HGET key field                                 | 返回哈希表key中给定域field的值                               | O(1)       |
| HEXISTS key field                              | 判断给定域field是否存在于哈希表key中                         | O(1)       |
| HDEL key field [field ...]                     | 删除哈希表key中的⼀个或多个指定域field                       | O(1)       |
| HLEN key                                       | 返回哈希表key中域的数量                                      | O(1)       |
| HSTRLEN key field                              | 返回哈希表key中，给定域field相关联的值的字符串⻓度           | O(1)       |
| HINCRBY key field increment                    | 将哈希表 key 中field的值加上增量 increment。                 | O(1)       |
| HINCRBYFLOAT key field increment               | 将哈希表key中field的值加上浮点数增量increment                | O(1)       |
| HMSET key field value [field value ...]        | 设置多个key-value对。（功能同HSET相同，已过时）              | O(N)       |
| HMGET key field [field ...]                    | 返回哈希表key中⼀个或多个给定域field的值                     | O(N)       |
| HKEYS key                                      | 返回哈希表key中的所有域                                      | O(N)       |
| HVALS key                                      | 返回哈希表key中所有域的值                                    | O(N)       |
| HGETALL key                                    | 返回哈希表key中所有的域和值                                  | O(N)       |
| HSCAN key cursor [MATCH pattern] [COUNT count] | 增量迭代，是⼀个基于游标的迭代器。类似的命令还有SCAN、SSCAN、ZSCAN |            |



### 发布订阅

| 命令                    | 说明                 |
| ----------------------- | -------------------- |
| channel [channel ...]   | 监听发布到频道的消息 |
| publish channel message | 发布消息到频道       |



### 流 Stream

| 命令                                                         | 说明                                                         | 时间复杂度 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| XADD key [NOMKSTREAM] [MAXLEN\|MINID [=\|~] threshold [LIMIT count]] \*\|id field value [field value ...] | 向流追加⼀个新的消息，如果key不存在则创建                    | O(1)       |
| XREAD [COUNT count] [BLOCK milliseconds] STREAMS key [key ...] id [id ...] | 读取和返回流key中⽐id⼤的消息，若没有则阻塞⾄消息可⽤        |            |
| XLEN key                                                     | 返回流key中消息的数量                                        | O(1)       |
| XRANGE key start end [COUNT count]                           | 返回流key中，id位于start和end之间的消息（包括start和end）可用 \- \+ 列出所有消息 | O(N)       |
| XINFO STREAM key [FULL [COUNT count]]                        | 返回流key的信息                                              | O(1)       |
| XACK key group id [id ...]                                   | 返回流key中被消费者组group成功接收的消息数量。               |            |
| XCLAIM key group consumer min-idle-time id [id ...]          | 返回流key的信息                                              | O(1)       |
| XDEL key id [id ...]                                         | 从流key中移除消息并返回移除消息的数量。                      | O(1)       |
| XGROUP CREATE key groupname id\|$ [MKSTREAM] [ENTRIESREAD entries_read] | 创建⼀个消费者组                                             | O(1)       |
| XGROUP CREATECONSUMER key groupname consumername             | 在消费者组groupname中创建⼀个消费者consumername。            | O(1)       |
| XGROUP DELCONSUMER key groupname consumername                | 从消费者组groupname中删除⼀个消费者consumername。            | O(1)       |
| XGROUP DESTROY key groupname                                 | 删除⼀个消费者组groupname。                                  | O(1)       |
| XGROUP SETID key groupname id\|$ [ENTRIESREAD entries_read]  | 设置⼀个消费者组groupname的最后交付id                        | O(1)       |
| XINFO CONSUMERS key groupname                                | 返回流消费者组kgroupname中的消费者列表                       | O(1)       |
| XINFO GROUPS key                                             | 返回流key的消费者组列表                                      | O(1)       |
| XINFO STREAM key [FULL [COUNT count]]                        | 返回流key的信息                                              | O(1)       |
| XTRIM key MAXLEN\|MINID [=\|~] threshold [LIMIT count]       | 从流的开头删除消息。                                         | O(1)       |



## 事物

事务可以确保一系列命令以原子方式执行，即要么所有命令都执行成功，要么全部失败，没有中间状态。在事务执行期间，其他客户端发送的命令不会被插入到事务中，从而保证了事务的完整性和一致性。

使用 Redis 事务的主要目的是进行原子性地执行多个命令，常见的应用场景包括：

执行一组相关的操作：将一系列相关的 Redis 命令封装在一个事务中，可以确保这些操作要么全部执行成功，要么全部失败。

提高性能：使用事务可以减少网络往返次数，将多个命令一次性发送到 Redis 服务器，降低了通信开销，提高了性能。

维护数据一致性：通过将多个操作放在一个事务中执行，可以确保这些操作在同一个事务中执行，保持数据的一致性。

在 Redis 中，事务的使用通过以下四个命令来完成：

MULTI：表示事务开始。
EXEC：执行事务中的所有命令。
DISCARD：取消事务。
WATCH：用于监视一个或多个键，当被监视的键被其他客户端修改时，事务会被取消。
事务是 Redis 中重要的特性之一，它提供了一种简单而强大的方式来进行批量操作和维护数据的一致性。



> 如果在命令的执行中有一个命令失败了,会阻止其他命令执行吗?
>
> 不会



在 Redis 中，事务的特性保证了命令的原子性，即要么所有命令都执行成功，要么全部失败。如果在事务执行期间有一个命令失败了，Redis 会继续执行后续的命令，而不会阻止其他命令的执行。

当使用事务执行多个命令时，Redis 首先会将这些命令按顺序放入一个队列中，并且在 EXEC 命令执行之前不会立即执行这些命令。当执行 EXEC 命令时，Redis 会遍历队列中的命令并逐个执行。

如果在执行过程中出现了错误（如语法错误、类型错误、访问错误等），Redis 会记录错误，但不会中止事务的执行。即使某个命令失败了，后续的命令仍然会继续执行。最后，EXEC 命令会返回每个命令的执行结果，以供客户端处理。

需要注意的是，在 Redis 的事务中，错误的发生并不会回滚部分已执行的命令，也不会影响其他命令的执行。因此，开发者在使用 Redis 事务时需注意处理每个命令的执行结果，并根据需要进行适当的错误处理和数据恢复。



## 持久化

Redis提供了两种持久化机制，用于在Redis服务器重启后恢复数据：RDB持久化和AOF持久化。

1. RDB（Redis DataBase）持久化：RDB是Redis的默认持久化方式。它通过生成快照来将内存中的数据定期保存到磁盘上。快照是一个二进制文件，包含了某个时间点上的所有数据。RDB持久化具有较高的性能和紧凑的文件大小，适合用于备份和灾难恢复。

   RDB持久化可以通过配置文件中的`save`指令来定期触发，也可以使用`SAVE`或`BGSAVE`命令手动进行触发。`SAVE`命令会阻塞Redis服务器，直到持久化过程完成，而`BGSAVE`命令会派生出一个子进程进行持久化，不会阻塞服务器。

2. AOF（Append-Only File）持久化：AOF持久化以日志追加的方式记录每个写操作的命令，将这些命令追加到文件的末尾。当Redis服务器重启时，可以通过重新执行这些命令来恢复数据。

   AOF持久化可以通过配置文件中的`appendonly`选项开启，在默认情况下处于关闭状态。开启AOF后，Redis会将命令追加到AOF文件中，确保数据的持久化。AOF文件较RDB文件更大，但是比RDB更加耐久，可以在服务器崩溃时提供更好的数据保护。

   Redis还提供了三种AOF持久化方式：`always`（每个命令都立即写入AOF文件，默认方式）、`everysec`（每秒钟将命令写入AOF文件一次）和`no`（完全依赖操作系统缓冲区，性能最高，但可能在故障时丢失最近的写操作）。

   Redis 配置文件为 redis.conf



## 主从复制

Redis 配置文件在 Mac 下的位置

```sh
cd /opt/homebrew/etc/
ls
cat redis.conf
```

打开之后修改 port  为 6380、pidfile 为 /var/run/redis_6380.pid 、dbfilename 为 dump-6380.rdb、replicaof 为 replicaof 127.0.0.1 6379



![image-20230926161734004](https://cdn.jsdelivr.net/gh/Silence-dream/bed@master/img/202309261617201.png)



## 哨兵模式

哨兵模式是为了解决主节点宕机需要手动提升子节点的问题,开启哨兵模式之后会实现故障的自动转移.



哨兵模式的配置文件一般命名为 sentinel.conf 我们需要手动创建,然后在文件中添加如下配置



```conf
sentinel monitor master 127.0.0.1 6379 1
#               主节点名称 主节点IP 端口号 1 表示只需要一个哨兵节点同意就可以进行故障转移
```



```sh
redis-sentinel sentinel.conf # 启动哨兵节点
```



哨兵节点自己也有会挂掉的可能所以,一般在实际项目中会启动三个哨兵节点,这三个哨兵节点会通过选举的方式选出一个领导者来监控其他节点,如果领导者挂了那么其他哨兵节点会重新选举出一个领导者



## 参考

[【GeekHour】一小时Redis教程\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Jj411D7oG/?)
