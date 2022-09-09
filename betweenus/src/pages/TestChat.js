import * as React from "react";

export default function TestChat() {
  return (
    <html>
      <head>
        <title>TalkPlus Sample App</title>
        <link rel="stylesheet" href="../assets/css/style.css" />
      </head>
      <div class="wrap">
        <section class="menu-section">
          <h1>
            <a href="https://www.talkplus.io/intro/" target="_blank">
              {/* <img src="./images/logo.svg" alt="logo" /> */}
            </a>
          </h1>
        </section>
        <main class="chat-wrap">
          <div class="chat-wrap-inner">
            <div class="chat-container">
              <h2 class="chat-title">톡플러스</h2>
              <div class="chat-area" id="chatView">
                <div class="date"></div>
                <div class="notibox">
                  <span>
                    채팅방 운영정책 및 공지를 입력할 수 있는 영역입니다
                  </span>
                </div>
                <div class="message-area"></div>
              </div>
              <div class="message-write-area">
                <div class="message-write-inner">
                  <div class="btn-attach">
                    <a href="javascript:void(0);"></a>
                  </div>
                  <div class="attach-box">
                    <ul>
                      <li>
                        <a class="attach pic" href="javascript:void(0);">
                          사진첨부
                        </a>
                      </li>
                      <li>
                        <a class="attach video" href="javascript:void(0);">
                          동영상 첨부
                        </a>
                      </li>
                      <li>
                        <a class="attach file" href="javascript:void(0);">
                          파일첨부
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="write-box">
                    <input
                      type="text"
                      class="enterMessage"
                      placeholder="메시지를 입력해주세요."
                    />
                  </div>
                  <a
                    class="btn-send"
                    id="btnEnterMessage"
                    href="javascript:void(0);"
                  >
                    전송
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </html>
  );
}
