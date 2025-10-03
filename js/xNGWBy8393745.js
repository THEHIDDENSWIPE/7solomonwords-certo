
      function atomiShowItems({items}) {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      }
    
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
    
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    
        (function() {
          try {
            const chatbotList = [{"compKey":"d40529c","misc":{"type":"chatbot","items":[{"chat":"Já tinha ouvido falar sobre a história de salomão, mas não desse jeito. Com certeza vou tentar.","bg":"#3b82f6","user":"Rebeca Dias"},{"bg":"#3b82f6","chat":"Consegui muitas benções na minha vida depois de aprender a pedir corretamente, me entregar de alma leve. Isso é muito verdade. ","user":"Carol Santana"},{"chat":"Eu nem acredito que apareceu esse vídeo justo hoje. Com certeza é o senhor falando comigo","user":"Roberto Motta","bg":"#3b82f6"},{"bg":"#3b82f6","user":"Maria Donizette","chat":"Parece que me descreveu. Eu permito senhor, que entre na minha vida e faça benções!!"},{"bg":"#3b82f6","chat":"Eu já vi uma apresentação do José, é muito emocionante.","user":"Rosana Lopes"}],"chatType":"youtube"}}];
            const language = "pt" || "pt";
            const langObj = {
              en: "You",
              es: "Tú",
              fr: "Vous",
              it: "Tu",
              pt: "Você",
            }
            let currentUser = langObj[language];
            function convertTimeToMilliseconds(time) {
                const [minutes, seconds] = time.split(":").map(Number);
                return (minutes * 60 + seconds) * 1000;
            }

            chatbotList?.forEach(chatbot => {
                const chatbotEle = document.querySelector(`.a-ch-${chatbot?.compKey}`);
                const comments = chatbotEle?.querySelector(".comments");
                const sendBtn = chatbotEle?.querySelector(".btn-send");
                const textareaEle = chatbotEle?.querySelector(".send-message");
                const items = chatbot?.misc?.items;
                const messageCount = chatbotEle?.querySelector(".msg-count");
                const textareaPlaceholder = textareaEle?.placeholder;
                const filter = chatbot?.misc?.filter || [];

                const addNewChat = (e) => {
                    e.preventDefault();
                    let filterOutValue = textareaEle?.value?.trim();      
                    filter?.forEach(item => {
                      filterOutValue = filterOutValue?.replace(item, "");
                    }); 
                    if(!filterOutValue?.trim()) return;
                    const addChat = `<div class="comment"><div class="user-id"><div class="user-icon"><span>${currentUser?.[0]}</span></div></div><span class="comment-user">${currentUser}</span><span class="comment-text">${filterOutValue}</span></div>`;
                    comments?.insertAdjacentHTML("beforeend", addChat);
                    textareaEle.value = "";
                    messageCount.innerHTML = "0/200"; 
                    comments.scroll({
                      top: comments.scrollHeight,
                      behavior: 'smooth'
                    });
  
                };

                textareaEle?.addEventListener("keyup", (e) => {
                  if(textareaEle?.value?.length > 200) {
                    textareaEle.value = textareaEle?.value?.slice(0, 200);
                  }
                  if(e?.key?.toLowerCase() === "enter") {
                     addNewChat(e);
                  } else {
                    messageCount.innerHTML = `${textareaEle?.value?.length}/200`; 
                  }
                })
                sendBtn?.addEventListener("click", (e) => {
                  addNewChat(e);
                })
                items?.forEach(item => {
                    const newChat = `<div class="comment"><div class="user-id" style="background:${item?.bg}"><div class="user-icon"><span>${item?.user?.[0] || "U"}</span></div></div><div><span class="comment-user">${item?.user || "User1234"}</span><span class="comment-text">${item?.chat || "Wow!"}</span></div></div>`;

                    const timeout = convertTimeToMilliseconds(item?.time || "00:00"); 
                    setTimeout(() => {
                        comments.insertAdjacentHTML("beforeend", newChat);
                        comments.scroll({
                          top: comments.scrollHeight,
                          behavior: 'smooth'
                        });
                    }, timeout);
                })
               
            })

          } catch (error) {
            return error;
          }
        })();(function() {
          try {
              const clickeventList = [{"compKey":"c766ab9","misc":{"type":"button"}},{"compKey":"05cdfb7","misc":{"type":"button"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();