function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // Проверяем, содержит ли хост ключевые части доменов
    if (
        shExpMatch(host, "*claude.ai") ||
        shExpMatch(host, "*.anthropic.com") ||
        shExpMatch(host, "*chat.openai.com") ||
        shExpMatch(host, "*.openai.com")
    ) {
        return "PROXY 185.227.145.98:2986"; // Замените на ваш прокси
    }

    return "DIRECT";
}