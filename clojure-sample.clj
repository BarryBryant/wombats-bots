(fn [state time-left]
  (ns i-am-a-golden-god.core
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]))

 (defn extractJson
  [responseBody]
  (get (json/read-str responseBody) "value1"))

 (defn makeCall
  [url input]
   (:body
    (client/get url
                {:query-params {"value1" input}})))

 (defn getIt
  [url input]
   (println
    (extractJson
     (makeCall url input))))

 (defn run [] (getIt "http://ermahgerd.herokuapp.com/ternslert" 
                      "I am become Kelsey, destroyer of worlds"))

 (run)
  (def turn-directions [:right :left :about-face])
  (def smoke-directions [:forward :backward :left :right :drop])

  (let [command-options [(repeat 10 {:action :move
                                     :metadata {}})
                         (repeat 2 {:action :turn
                                    :metadata {:direction (rand-nth turn-directions)}})
                         (repeat 4 {:action :shoot
                                      :metadata {}})
                         (repeat 1 {:action :smoke
                                    :metadata {:direction (rand-nth smoke-directions)}})]]

    {:command (rand-nth (flatten command-options))
     :state {}}))
