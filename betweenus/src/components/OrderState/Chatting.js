import * as React from "react";
import "../../assets/css/common.css";

const Chatting = () => {
  return (
    <section className="chat">
      <div className="wrap">
        <ol className="list-chat">
          <li>
            <div className="ly-l">
              <div className="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div className="nickname">치킨마니아</div>
              </div>

              <div className="chat-content">
                <div className="bubble">안녕하세요 :)</div>
                <div className="chat-time">18:01</div>
              </div>
            </div>
          </li>

          <li>
            <div className="ly-r">
              <div className="chat-content">
                <div className="bubble">안녕하세요 :)</div>
                <div className="chat-time">18:03</div>
              </div>
            </div>
          </li>

          <li>
            <div className="ly-l">
              <div className="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div className="nickname">치킨마니아</div>
              </div>

              <div className="chat-content">
                <div className="bubble">
                  주문 완료해주신 분들 제 계좌번호 XXXX-XX.. 로 음식 가격이랑
                  배달비 800원씩 추가해서 보내주세요~
                </div>
                <div className="chat-time">18:05</div>
              </div>
            </div>
          </li>

          <li>
            <div className="ly-r">
              <div className="chat-content">
                <div className="bubble">저 입금했습니당~!!</div>
                <div className="chat-time">18:06</div>
              </div>
            </div>
          </li>

          <li>
            <div className="ly-l">
              <div className="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div className="nickname">배고파용용</div>
              </div>

              <div className="chat-content">
                <div className="bubble">
                  저도 입금했습니다! 호스트님 확인해주세요!
                </div>
                <div className="chat-time">18:06</div>
              </div>
            </div>
          </li>

          <li>
            <div className="ly-l">
              <div className="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div className="nickname">냥냥펀치</div>
              </div>

              <div className="chat-content">
                <div className="bubble">저도요!</div>
                <div className="chat-time">18:07</div>
              </div>
            </div>
          </li>

          <li>
            <div className="ly-l">
              <div className="user-info">
                <img src="../img/ico_user1.svg" alt=" " />
                <div className="nickname">치킨마니아</div>
              </div>

              <div className="chat-content">
                <div className="bubble">주문완료했습니다~</div>
                <div className="chat-time">18:07</div>
              </div>
            </div>
          </li>

          <li>
            <div className="ly-r">
              <div className="chat-content">
                <div className="bubble">감사합니다! :)</div>
                <div className="chat-time">18:08</div>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div className="inp-group-chat">
        <div className="write-tool">
          <div className="btn-upload">
            <input type="file" id="upload" />
            <label for="upload"></label>
          </div>
          <input
            type="text"
            placeholder="메세지를 입력하세요."
            className="inp-chat"
          />
          <button type="button" className="btn-send"></button>
        </div>
      </div>
    </section>
  );
};

export default Chatting;
