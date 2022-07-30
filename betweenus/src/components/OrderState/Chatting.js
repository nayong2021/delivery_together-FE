import * as React from "react";
import "../../assets/css/common.css";

const Chatting = () => {
  return (
    <section class="chat">
      <div class="wrap">
        <ol class="list-chat">
          <li>
            <div class="ly-l">
              <div class="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div class="nickname">치킨마니아</div>
              </div>

              <div class="chat-content">
                <div class="bubble">안녕하세요 :)</div>
                <div class="chat-time">18:01</div>
              </div>
            </div>
          </li>

          <li>
            <div class="ly-r">
              <div class="chat-content">
                <div class="bubble">안녕하세요 :)</div>
                <div class="chat-time">18:03</div>
              </div>
            </div>
          </li>

          <li>
            <div class="ly-l">
              <div class="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div class="nickname">치킨마니아</div>
              </div>

              <div class="chat-content">
                <div class="bubble">
                  주문 완료해주신 분들 제 계좌번호 XXXX-XX.. 로 음식 가격이랑
                  배달비 800원씩 추가해서 보내주세요~
                </div>
                <div class="chat-time">18:05</div>
              </div>
            </div>
          </li>

          <li>
            <div class="ly-r">
              <div class="chat-content">
                <div class="bubble">저 입금했습니당~!!</div>
                <div class="chat-time">18:06</div>
              </div>
            </div>
          </li>

          <li>
            <div class="ly-l">
              <div class="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div class="nickname">배고파용용</div>
              </div>

              <div class="chat-content">
                <div class="bubble">
                  저도 입금했습니다! 호스트님 확인해주세요!
                </div>
                <div class="chat-time">18:06</div>
              </div>
            </div>
          </li>

          <li>
            <div class="ly-l">
              <div class="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div class="nickname">냥냥펀치</div>
              </div>

              <div class="chat-content">
                <div class="bubble">저도요!</div>
                <div class="chat-time">18:07</div>
              </div>
            </div>
          </li>

          <li>
            <div class="ly-l">
              <div class="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div class="nickname">치킨마니아</div>
              </div>

              <div class="chat-content">
                <div class="bubble">주문완료했습니다~</div>
                <div class="chat-time">18:07</div>
              </div>
            </div>
          </li>

          <li>
            <div class="ly-r">
              <div class="chat-content">
                <div class="bubble">감사합니다! :)</div>
                <div class="chat-time">18:08</div>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div class="inp-group-chat">
        <div class="write-tool">
          <div class="btn-upload">
            <input type="file" id="upload" />
            <label for="upload"></label>
          </div>
          <input
            type="text"
            placeholder="메세지를 입력하세요."
            class="inp-chat"
          />
          <button type="button" class="btn-send"></button>
        </div>
      </div>
    </section>
  );
};

export default Chatting;
