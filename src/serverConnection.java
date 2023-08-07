
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;
import java.net.InetSocketAddress;
import java.util.Collection;
import java.util.Collections;
import java.util.concurrent.ConcurrentHashMap;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.io.IOException;

public class serverConnection extends WebSocketServer {
    private final Collection<WebSocket> clients = Collections.newSetFromMap(new ConcurrentHashMap<>());
    public serverConnection(InetSocketAddress param) {
        super(param);
    }

    @Override
    public void onStart(){
        System.out.println("Server started");
    }

    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake) {
        System.out.println("WebSocket connection opened");
      try{
        conn.send("broadcastFile="+(new String(Files.readAllBytes(Paths.get("broadcasts/jhs vs rhs.mstv")), StandardCharsets.UTF_8)));
      }
      catch (IOException e) {
        e.printStackTrace();
    }
               synchronized(clients){
        clients.add(conn);
               }
    }

    @Override
    public void onClose(WebSocket conn, int code, String reason, boolean remote) {
        System.out.println("WebSocket connection closed");
                synchronized(clients){
        clients.remove(conn);
                }
    }

    @Override
    public void onMessage(WebSocket conn, String message) {
        System.out.println( message);
        synchronized(clients){
        for (WebSocket client : clients) {
            client.send(message);
        }
    }
    }

    @Override
    public void onError(WebSocket conn, Exception ex) {
        ex.printStackTrace();
    }

    
    public static void main(String[] args) throws Exception {

        WebSocketServer server = new serverConnection(new InetSocketAddress("localhost", 6788));

             System.out.println("\n ----------------------------\n");


        server.run();
}

}