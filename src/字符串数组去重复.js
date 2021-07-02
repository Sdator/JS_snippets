const str = `
ps -ef
ps aux | sort -rnk 4
ps aux | sort -nk 3
ps -ef | grep rslsync
ps -ef | grep rslsync|killall
ps -ef | awk '{print $2}'
ps -ef | awk '{print $2}'ps -ef | grep rslsync | awk '{print $2}'
ps -ef | grep rslsync | awk '{print $2}'
ps -ef | grep rslsync | awk '{print $2}' |xargs kill -9
ps -ef | grep rslsync | awk '{print $2}'
ps -ef | grep rslsync
ps -ef | grep jd
ps -a
ps -ef | grep mosh
ps -ef | grep ssh
ps -ef | gerp mosh
ps -ef | grep mosh
ps -a
ps -a
ps aux | less
ps aux | grep docker
ps aux | grep node


`
  .trim()
  .split("\n");

//   去重复后 解析为数组 重新排列
let 去重复 = [...new Set(str)].sort();

console.log(str.length, 去重复.length);

for (const v of 去重复) {
  console.log(v);
}
