function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    if (
        host == "claude.ai" ||
        shExpMatch(host, "*.claude.ai") ||
        shExpMatch(host, "*.anthropic.com") ||

        host == "chatgpt.com" ||
        shExpMatch(host, "*.chatgpt.com") ||
        shExpMatch(host, "*.openai.com") ||

        host == "plex.tv" ||
        shExpMatch(host, "*.plex.tv") ||

        host == "notebooklm.google.com" ||
        host == "notebooklm.google" ||
        shExpMatch(host, "*.notebooklm.google.com") ||

        host == "gemini.google.com" ||
        shExpMatch(host, "*.gemini.google.com") ||

        host == "ai.google.dev" ||
        shExpMatch(host, "*.ai.google.dev")
    ) {
        return "PROXY 185.227.145.98:2986";
    }

    return "DIRECT";
}
