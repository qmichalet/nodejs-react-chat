import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
	return (
		<div style={{ height: "100vh" }}>
			<PrettyChatWindow
				projectId="bc17ab38-6638-4eaf-8093-78bab0c09717"
				username={props.user.username}
				secret={props.user.secret}
				style={{ height: "100%" }}
			/>
		</div>
	);
};

export default ChatsPage;
