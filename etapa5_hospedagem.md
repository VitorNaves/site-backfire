# Etapa 5: Finalização e Testes (Guia Rápido)

Como os arquivos do nosso site (`index.html`, `styles.css` e `script.js`) estão 100% prontos, muito leves e rápidos, o último passo é colocá-los no ar para o mundo inteiro ver.

Aqui estão os passos de como você pode testar no celular e como vincular o seu domínio (ex: `backfireoficial.com.br`):

---

## 📱 1. Como fazer o Teste Mobile (no seu celular)
Antes de colocarmos "No Ar", você pode ver como ele ficou na tela do seu celular:
1. Pela tela do computador, abra o site (`index.html`) no Google Chrome.
2. Clique com o botão direito do mouse em qualquer lugar da tela e escolha **Inspecionar** (ou aperte `F12`).
3. No painel que vai abrir, procure pelo ícone de **um celular e um tablet** no menu lá de cima (como se fosse "Alternar a barra de ferramentas do dispositivo").
4. A tela vai encolher no formato de um smartphone. Você pode escolher os modelos lá em cima (como "iPhone 14 Pro" ou "Samsung Galaxy"). Role a página e veja se os botões, fotos e vídeos já estão se adaptando perfeitamente sem quebrar pro lado!

---

## 🚀 2. Como colocar o site "No Ar" de graça (Hospedagem)
Como o nosso projeto é super optimizado (HTML, CSS e JS puros), você não precisa de plataformas pesadas como WordPress ou pagar hospedagens mensais caras. Recomendo usar a plataforma gratuita chamada **Netlify**.

1. Crie uma conta no site [netlify.com](https://app.netlify.com/).
2. Após o login, vá até a aba **"Sites"** (lado esquerdo).
3. No final da tela existirá uma caixa dizendo algo como *“Drag and drop your site folder here”* (Arraste a pasta do seu site aqui).
4. Basta você abrir a sua pasta `Desktop` lá no Windows Explorer, pegar TODA a pasta **`Site BackFire`** e arrastar ela direto para essa caixa no navegador.
5. Em segundos, o Netlify vai criar um link provisório pro seu site, do tipo: `seu-site.netlify.app`. 
**Pronto! O site já está na internet.** 

---

## 🌐 3. Vinculando seu Domínio (.com.br)
No mesmo Netlify, após soltar a pasta do passo acima:
1. Clique no seu projeto recém criado e vá em **"Domain Management"** (Gerenciamento de Domínio) e depois clique em **"Add Custom Domain"**.
2. Digite o domínio que você comprou (ex: `backfireoficial.com.br`).
3. O painel mostrará que você precisa confirmar que você é o dono daquele nome ("Verify").
4. Na tela final, o Netlify vai te dar alguns endereços em formato de NameServers (*DNS*), parecidos com isso:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
5. Vá até a empresa onde você comprou o seu nome na internet (Registro.br, Hostinger, GoDaddy, etc), logue por lá, acesse a configuração de DNS do domínio e apenas substitua o Servidor Master/Slave (Servidor de Nomes) pelo que o Netlify te informou.

Em algumas horas, ao digitar o seu domínio no navegador de qualquer lugar do mundo, o seu Site BackFire novo entra perfeitamente no ar.
