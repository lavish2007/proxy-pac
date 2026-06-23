function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    if (
        host == "claude.ai" ||
        shExpMatch(host, "*.claude.ai") ||
        shExpMatch(host, "*.anthropic.com") ||

        host == "chatgpt.com" ||
        shExpMatch(host, "*.chatgpt.com") ||

        host == "chat.openai.com" ||
        shExpMatch(host, "*.openai.com")
    ) {
        return "PROXY 185.227.145.98:2986";
    }

    return "DIRECT";
}