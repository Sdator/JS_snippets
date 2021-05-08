{
    let key = `{
    "dns": {
        "hosts": {
            "domain:googleapis.cn": "googleapis.com"
        },
        "servers": [
            "1.1.1.1"
        ]
    },
    "inbounds": [
        {
            "listen": "127.0.0.1",
            "port": 10808,
            "protocol": "socks",
            "settings": {
                "auth": "noauth",
                "udp": true,
                "userLevel": 8
            },
            "sniffing": {
                "destOverride": [
                    "http",
                    "tls"
                ],
                "enabled": true
            },
            "tag": "socks"
        },
        {
            "listen": "127.0.0.1",
            "port": 10809,
            "protocol": "http",
            "settings": {
                "userLevel": 8
            },
            "tag": "http"
        }
    ],
    "outbounds": [
        {
            "mux": {
                "concurrency": 8,
                "enabled": true
            },
            "protocol": "shadowsocks",
            "settings": {
                "servers": [
                    {
                        "address": "hxun.xyz",
                        "level": 8,
                        "method": "chacha20-ietf-poly1305",
                        "ota": false,
                        "password": "asdv5D15-6f",
                        "port": 9090
                    }
                ]
            },
            "streamSettings": {
                "network": "tcp"
            },
            "tag": "proxy"
        },
        {
            "mux": {
                "concurrency": 8,
                "enabled": true
            },
            "protocol": "shadowsocks",
            "settings": {
                "servers": [
                    {
                        "address": "hxun.xyz",
                        "level": 8,
                        "method": "chacha20-ietf-poly1305",
                        "ota": false,
                        "password": "asdv5D15-6f",
                        "port": 9091
                    }
                ]
            },
            "streamSettings": {
                "network": "tcp"
            },
            "tag": "ss-1"
        },
        {
            "mux": {
                "concurrency": 8,
                "enabled": true
            },
            "protocol": "shadowsocks",
            "settings": {
                "servers": [
                    {
                        "address": "hxun.xyz",
                        "level": 8,
                        "method": "chacha20-ietf-poly1305",
                        "ota": false,
                        "password": "asdv5D15-6f",
                        "port": 9092
                    }
                ]
            },
            "streamSettings": {
                "network": "tcp"
            },
            "tag": "ss-2"
        },
        {
            "protocol": "freedom",
            "settings": {},
            "tag": "direct"
        },
        {
            "protocol": "blackhole",
            "settings": {
                "response": {
                    "type": "http"
                }
            },
            "tag": "block"
        }
    ],
    "policy": {
        "levels": {
            "8": {
                "connIdle": 300,
                "downlinkOnly": 1,
                "handshake": 4,
                "uplinkOnly": 1
            }
        },
        "system": {
            "statsOutboundUplink": true,
            "statsOutboundDownlink": true
        }
    },
    "routing": {
        "domainStrategy": "IPIfNonMatch",
        "rules": [
            {
                "type": "field",
                "ip": [
                    "geoip:cn",
                    "geoip:private"
                ],
                "outboundTag": "direct"
            },
            {
                "type": "field",
                "domain": [
                    "geosite:cn"
                ],
                "outboundTag": "direct"
            },
            {
                "type": "field",
                "inboundTag": [
                    "socks",
                    "http"
                ],
                "balancerTag": "balancer-ss"
            }
        ],
        "balancers": [
            {
                "tag": "balancer-ss",
                "selector": [
                    "ss",
                    "proxy"
                ]
            }
        ]
    },
    "stats": {}
}`

    //     const json = JSON.parse(key)
//     key = {
//         "abc": 456,
//         "dd": 789
//     }

    //     let json = JSON.stringify(key)

    abc = JSON.parse(key)

    console.log(abc)

}
