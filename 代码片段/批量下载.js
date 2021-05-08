{
    const url = ""

    fetch(this._url, {
                    method: "POST",
                    headers: i,
                    credentials: "include",
                    body: a
                }).then(function(t) {
                    if (502 === t.status)
                        o._onDisconnect(t);
                    else if (409 === t.status && t.headers.has(e.SESSION_ID_HEADER))
                        return o._onConnect(t),
                        o._sessionId = t.headers.get(e.SESSION_ID_HEADER),
                        fetch(o._url, {
                            method: "POST",
                            headers: u({}, i, r({}, e.SESSION_ID_HEADER, o._sessionId)),
                            body: a
                        });
                    return t
                })

}
