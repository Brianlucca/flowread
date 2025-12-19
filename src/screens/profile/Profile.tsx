import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { theme } from "../../theme";
import { styles } from "./styles";

const USER = {
  name: "Brian Lucca",
  handle: "@brianlucca",
  image: "https://github.com/Brianlucca.png",
  level: 5,
  xpCurrent: 750,
  xpNext: 1000,
  stats: {
    followers: 1240,
    following: 85,
    booksRead: 42,
  },
};

const BADGES = [
  {
    id: "1",
    name: "Leitor Voraz",
    icon: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png",
    unlocked: true,
  },
  {
    id: "2",
    name: "Social",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    unlocked: true,
  },
  {
    id: "3",
    name: "Maratonista",
    icon: "https://cdn-icons-png.flaticon.com/512/2618/2618526.png",
    unlocked: false,
  },
  {
    id: "4",
    name: "Crítico",
    icon: "https://cdn-icons-png.flaticon.com/512/1069/1069359.png",
    unlocked: false,
  },
  {
    id: "5",
    name: "Colecionador",
    icon: "https://cdn-icons-png.flaticon.com/512/864/864731.png",
    unlocked: true,
  },
  {
    id: "6",
    name: "Mestre",
    icon: "https://cdn-icons-png.flaticon.com/512/5551/5551360.png",
    unlocked: false,
  },
];

const FEED_ACTIVITIES = [
  {
    id: "1",
    type: "REVIEW",
    text: "finalizou a leitura de",
    target: "O Hobbit",
    time: "2 horas atrás",
    content: "Uma jornada incrível! Bilbo é o melhor protagonista.",
  },
  {
    id: "2",
    type: "QUOTE",
    text: "destacou um trecho em",
    target: "Duna",
    time: "Ontem",
    content: '"Não terei medo. O medo mata a mente."',
  },
  {
    id: "3",
    type: "BADGE",
    text: "desbloqueou a conquista",
    target: "Leitor Voraz",
    time: "2 dias atrás",
    content: null,
  },
];

export function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<"feed" | "badges">("feed");

  const xpPercentage = (USER.xpCurrent / USER.xpNext) * 100;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => Alert.alert("Config", "Abrir configurações")}
            >
              <Feather
                name="settings"
                size={24}
                color={theme.colors.text.heading}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.avatarContainer}>
            <Image source={{ uri: USER.image }} style={styles.avatar} />
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>Lvl {USER.level}</Text>
            </View>
          </View>

          <Text style={styles.userName}>{USER.name}</Text>
          <Text style={styles.userHandle}>{USER.handle}</Text>

          <View style={styles.xpContainer}>
            <View style={styles.xpBarBackground}>
              <View style={[styles.xpBarFill, { width: `${xpPercentage}%` }]} />
            </View>
            <Text style={styles.xpText}>
              {USER.xpCurrent} / {USER.xpNext} XP
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{USER.stats.followers}</Text>
              <Text style={styles.statLabel}>Seguidores</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{USER.stats.following}</Text>
              <Text style={styles.statLabel}>Seguindo</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{USER.stats.booksRead}</Text>
              <Text style={styles.statLabel}>Lidos</Text>
            </View>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === "feed" && styles.activeTab]}
            onPress={() => setActiveTab("feed")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "feed" && styles.activeTabText,
              ]}
            >
              Atividade
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "badges" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("badges")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "badges" && styles.activeTabText,
              ]}
            >
              Conquistas
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          {activeTab === "badges" ? (
            <View style={styles.badgesGrid}>
              {BADGES.map((badge) => (
                <TouchableOpacity
                  key={badge.id}
                  style={styles.badgeCard}
                  disabled={!badge.unlocked}
                >
                  <Image
                    source={{ uri: badge.icon }}
                    style={[
                      styles.badgeImage,
                      !badge.unlocked && styles.badgeLocked,
                    ]}
                  />
                  <Text
                    style={[
                      styles.badgeName,
                      !badge.unlocked && styles.badgeLocked,
                    ]}
                  >
                    {badge.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View>
              {FEED_ACTIVITIES.map((activity) => (
                <View key={activity.id} style={styles.activityCard}>
                  <View style={styles.activityIcon}>
                    <Feather
                      name={
                        activity.type === "REVIEW"
                          ? "book-open"
                          : activity.type === "QUOTE"
                          ? "edit-3"
                          : "award"
                      }
                      size={18}
                      color={theme.colors.brand.primary}
                    />
                  </View>
                  <View style={styles.activityContent}>
                    <Text style={styles.activityHeader}>
                      <Text style={styles.bold}>Você</Text> {activity.text}{" "}
                      <Text style={styles.bold}>{activity.target}</Text>
                    </Text>
                    <Text style={styles.activityTime}>{activity.time}</Text>

                    {activity.content && (
                      <View style={styles.activityCardContent}>
                        <Text style={styles.bookQuote}>{activity.content}</Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
